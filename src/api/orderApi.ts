import type { AxiosResponse } from "axios";
import { apiClient } from "./apiClient";

export async function getAllOrders(payload: any): Promise<any> {
  const form = new FormData();

  // const { page, ticketType, createdBy, pageSize } = payload;
  form.append("pageNumber", payload.page);
  form.append("dataCount", payload.pageSize);
  form.append("active", "1");
  form.append("user_id", payload.userId);
  form.append("user_role", payload.roleId);
  form.append("ticket_type", payload.ticketType);
  form.append("createdBy", payload.createdBy);
  form.append("filterParams", JSON.stringify(payload.filterParams));
  const response: AxiosResponse<any> = await apiClient.post(
    "ticket/getAllTickets",
    form,
  );
  return response.data;
}
