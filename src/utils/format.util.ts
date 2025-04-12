import { USER_AGENT } from "../constants/weather.constants.js";
import { AlertFeature, AlertsResponse, PointsResponse, ForecastResponse } from "../interfaces/weather.interface.js";

/**
 * National Weather Service APIへのリクエストを実行する汎用関数
 * @param url - APIエンドポイントのURL
 * @returns 指定された型Tのレスポンスデータ、またはエラー時はnull
 */
export async function makeNWSRequest<T>(url: string): Promise<T | null> {
  const headers = {
    "User-Agent": USER_AGENT,
    Accept: "application/geo+json",
  };

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return (await response.json()) as T;
  } catch (error) {
    console.error("Error making NWS request:", error);
    return null;
  }
}

/**
 * 天気警報情報を整形された文字列に変換する
 * @param feature - 警報情報を含むAlertFeatureオブジェクト
 * @returns 整形された警報情報の文字列
 */
export function formatAlert(feature: AlertFeature): string {
  const props = feature.properties;
  return [
    `Event: ${props.event || "Unknown"}`,
    `Area: ${props.areaDesc || "Unknown"}`,
    `Severity: ${props.severity || "Unknown"}`,
    `Status: ${props.status || "Unknown"}`,
    `Headline: ${props.headline || "No headline"}`,
    "---",
  ].join("\n");
}