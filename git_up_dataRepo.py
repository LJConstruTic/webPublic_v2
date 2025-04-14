import argparse
import os
import subprocess

def usage():
    print("Uso: git_up_dataRepo.py -e USER_EMAIL -n USER_NAME -r REPO_NAME -b BRANCH_NAME -t GITHUB_TOKEN -m COMMIT_MESSAGE -l REPO_DIR")
    exit(1)

def parse_arguments():
    parser = argparse.ArgumentParser(description='Subir archivos a un repositorio de GitHub.')
    parser.add_argument('-e', '--email', required=True, help='Correo electrónico del usuario de Git')
    parser.add_argument('-n', '--name', required=True, help='Nombre del usuario de Git')
    parser.add_argument('-r', '--repo', required=True, help='Nombre del repositorio')
    parser.add_argument('-b', '--branch', required=True, help='Nombre de la rama')
    parser.add_argument('-t', '--token', required=True, help='Token de autenticación de GitHub')
    parser.add_argument('-m', '--message', required=True, help='Mensaje del commit')
    parser.add_argument('-l', '--repo_dir', required=True, help='Directorio del repositorio local')

    return parser.parse_args()

def upload_files(user_email, user_name, repo_name, branch_name, github_token, commit_message, repo_dir):
    github_org = "LJConstruTic"  # NAO ALTERAR O NOME DA ORGANIZACAO

    # Clonar el repositorio si no existe localmente
    if not os.path.isdir(repo_dir):
        print("Clonando el repositorio...")
        subprocess.run(['git', 'clone', f'https://{github_token}@github.com/{github_org}/{repo_name}.git', repo_dir])

    # Cambiar al directorio del repositorio
    os.chdir(repo_dir)

    # Configurar usuario de Git
    subprocess.run(['git', 'config', 'user.email', user_email])
    subprocess.run(['git', 'config', 'user.name', user_name])

    # Asegurarse de estar en la rama correcta
    subprocess.run(['git', 'checkout', branch_name])

    # Añadir los archivos (puedes personalizar qué archivos se añaden)
    subprocess.run(['git', 'add', '.'])

    # Confirmar los cambios con el mensaje proporcionado
    subprocess.run(['git', 'commit', '-m', commit_message])

    # Subir los cambios al repositorio
    print("Subiendo cambios al repositorio...")
    subprocess.run(['git', 'push', f'https://{github_token}@github.com/{github_org}/{repo_name}.git', branch_name])

if __name__ == '__main__':
    args = parse_arguments()

    # Comprobar que todos los parámetros han sido proporcionados
    if not args.email or not args.name or not args.repo or not args.branch or not args.token or not args.message or not args.repo_dir:
        usage()

    # Ejecutar la función para subir los archivos
    upload_files(args.email, args.name, args.repo, args.branch, args.token, args.message, args.repo_dir)

    # ejectutar script 
    # python3 git_up.py -e "usuario@example.com" -n "Juan Perez" -r "mi-repositorio" -b "main" -t "ghp_ABC1234567890" -m "Actualizando archivos" -l "/home/usuario/repos/mi-repositorio"
   # py -3 git_up_dataRepo.py -e "jose.cabral@ljconstrutic.com" -n "José Cabral" -r "InoConsulta" -b "main" -t "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" -m "Subiendo archivos desde script | JC_021024" -l "InoConsulta_local" 

