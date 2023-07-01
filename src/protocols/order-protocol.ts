export type Order = {
    id: number;
    clientId: number;
    product: string;
    status: string;
}

export type CreateOrder = Omit<Order, "id" | "status">;

export type UpdateOrder = Omit<Order, "clientId" | "id" | "product" >;

export type  CustomError = {
    type: string;
    message: string;
  }

