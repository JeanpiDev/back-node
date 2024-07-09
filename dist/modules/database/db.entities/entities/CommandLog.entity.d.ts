export declare class CommandLog {
    id: number;
    userId: number | null;
    imei: string | null;
    commandId: number | null;
    response: string | null;
    status: boolean | null;
    commandPendingId: number;
    createBy: Date | null;
    updateBy: Date | null;
}
