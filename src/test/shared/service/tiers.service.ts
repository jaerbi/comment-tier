import { TierComment } from '../../tier-comment/tier-comment.model';

export class TiersService {

    public getTiers(): TierComment[] {
        return [
            new TierComment(true, 'Tier 1', [
                new TierComment(true, 'Tier 1.2', [], 2)
            ], 1),
            new TierComment(true, 'Tier 2', [], 1),
            new TierComment(true, 'Tier 3', [
                new TierComment(true, 'Tier 3.1', [], 2),
                new TierComment(true, 'Tier 3.2', [], 2),
                new TierComment(true, 'Tier 3.3', [], 2),
            ], 1),
            new TierComment(true, 'Tier 4', [], 1),
        ];
    }
}
