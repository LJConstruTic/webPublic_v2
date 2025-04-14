export interface IService {
    idx: number;
    id: number;
    imageUrl: string;
    createdAt?: string;
    updatedAt?: string;
    isActive?: boolean;
    name?: Name;
    description?: Description;
}

type Name = {
    tagId: string;
    keyFrontView: string;
    tag: Tag;
};

type Description = {
    tagId: string;
    keyFrontView: string;
    tag: Tag;
};

type Tag =
    | {
          pt: string;
          umb: string;
          en: string;
          es: string;
      }
    | any;
