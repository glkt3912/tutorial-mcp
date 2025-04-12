/**
 * 天気警報の特徴を表すインターフェース
 */
export interface AlertFeature {
  properties: {
    event?: string;
    areaDesc?: string;
    severity?: string;
    status?: string;
    headline?: string;
  };
}

/**
 * 天気予報の期間情報を表すインターフェース
 */
export interface ForecastPeriod {
  name?: string;
  temperature?: number;
  temperatureUnit?: string;
  windSpeed?: string;
  windDirection?: string;
  shortForecast?: string;
}

/**
 * 警報情報のレスポンスを表すインターフェース
 */
export interface AlertsResponse {
  features: AlertFeature[];
}

/**
 * 地点情報のレスポンスを表すインターフェース
 */
export interface PointsResponse {
  properties: {
    forecast?: string;
  };
}

/**
 * 予報情報のレスポンスを表すインターフェース
 */
export interface ForecastResponse {
  properties: {
    periods: ForecastPeriod[];
  };
} 