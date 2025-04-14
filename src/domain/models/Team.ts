export interface ITeam {
    idx: number;
    id: string;
    imageUrl: string;
    name: {
        tagId: number;
        keyFrontView: string;
        tag:
            | {
                  pt: string;
                  umb: string;
                  en: string;
                  es: string;
              }
            | any;
    };
    job: {
        tagId: number;
        keyFrontView: string;
        tag:
            | {
                  pt: string;
                  umb: string;
                  en: string;
                  es: string;
              }
            | any;
    };
}
