export interface IComponent {
    id: string;
    idx: number;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
}

interface Tag {
    pt: string;
    umb: string;
    en: string;
    es: string;
}

export interface Item {
    tagId: string;
    tagIdx: number;
    keyFrontView: string;
    tag: Tag | any;
}

export interface Component {
    componentId: string;
    componentName: string;
    idx: number;
    items: Item[];
}
