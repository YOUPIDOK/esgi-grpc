import {collection as CollectionInterface} from "@prisma/client";
export class Collection implements CollectionInterface {
    id: number;
    user_id: number;
    name: string;
    nb_clipper: number;
    clipper_type: string;
    is_official: boolean;
    created_at: Date;
    updated_at: Date;
}