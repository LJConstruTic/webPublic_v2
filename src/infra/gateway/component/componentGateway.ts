import { IComponent } from "@/domain/models/component";

export interface ComponentGateway {
    getComponents(): Promise<IComponent[]>;
    getComponentById(id: string): Promise<IComponent>;
    createComponent(component: Omit<IComponent, "id" | "idx">): Promise<IComponent>;
    updateComponent(id: string, component: Omit<IComponent, "id" | "idx">): Promise<IComponent>;
    deleteComponent(id: string): Promise<IComponent>;
    getComponentByIdAndCodeLanguage<TComponent>(idComponent: string, code: number): Promise<TComponent>;
    getComponentByTag<Tag>(id: string): Promise<Tag>;
}
