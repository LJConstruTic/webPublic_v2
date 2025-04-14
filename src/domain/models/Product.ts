export interface IProduct {
    id: string;
    idx: number;
    title?: Title;
    description?: string;
    imageUrl: string;
    createdAt?: string;
    updatedAt?: string;
    isActive?: boolean;
}

type Title = {
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
