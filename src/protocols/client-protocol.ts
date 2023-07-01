export type Client = {
    id: number;
    name: string;
    address: string;
}

export type CreateClient = Omit<Client, "id">;

