export type DateRange = 'YTD' | 'LAST_QUARTER' | 'LAST_MONTH';
export type Channel = 'ATACADO' | 'INDUSTRIA';

export interface SalesRecord {
  id?: number;
  month: string;
  channel: Channel;
  salesperson: string;
  quantity: number;
  value: number;
}

export interface MonthlyChartData {
    month: string;
    faturamento: number;
    topSeller?: string;
    topSellerValue?: number;
}

export interface LeaderboardData {
    salesperson: string;
    totalSales: number;
}

export interface GoalStatus {
  name: string;
  value: number;
  color: string;
}