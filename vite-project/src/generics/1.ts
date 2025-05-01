import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error: unknown) {
    const message =
      error instanceof Error
        ? error.message
        : "Unknown error occurred while fetching data.";
    throw new Error(`Error fetching from ${url}: ${message}`);
  }
}

export default { fetchData };
