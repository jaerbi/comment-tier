export class TierComment implements ITierComment {
    constructor(
        public hasAction?: boolean,
        public title?: string,
        public tiers?: TierComment[],
        public level?: number,
        public isCreate?: boolean,
        public abstract?: boolean,
        public highValue?: boolean,
    ) {
    }
}

export interface ITierComment {
    hasAction?: boolean;
    title?: string;
    tiers?: TierComment[];
    level?: number;
    isCreate?: boolean;
}

export class TierDialogOption {
    width = '400px';
    data: TierComment;

    constructor(data?: TierComment) {
        this.data = data ? data : new TierComment();
    }
}
