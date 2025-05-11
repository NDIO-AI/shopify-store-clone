export interface User {
    id: string;
    email: string;
    password?: string;
    role: 'buyer' | 'seller' | 'admin';
    createdAt: Date;
    updatedAt: Date;
}
export interface Store {
    id: string;
    ownerId: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface Product {
    id: string;
    storeId: string;
    name: string;
    price: number;
    image: string;
    description: string;
    stock: number;
    createdAt: Date;
    updatedAt: Date;
}
export interface CartItem {
    id: string;
    productId: string;
    quantity: number;
    price: number;
}
export interface Cart {
    id: string;
    userId?: string;
    items: CartItem[];
    total: number;
    createdAt: Date;
    updatedAt: Date;
}
export interface OrderItem {
    id: string;
    productId: string;
    quantity: number;
    price: number;
}
export interface Order {
    id: string;
    userId: string;
    items: OrderItem[];
    total: number;
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    paymentStatus: 'pending' | 'paid' | 'failed';
    createdAt: Date;
    updatedAt: Date;
}
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}
