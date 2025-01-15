const eventNameMap: Record<string, string> = {
  sparkhack: "SparkHack",
  eureka: "Eureka!",
  decisia: "Decisia",
  aboltabol: "Abol Tabol",
  // Add more mappings as needed
};

// Helper function to get user-friendly event name
function getFriendlyEventName(eventKey: string): string {
  return eventNameMap[eventKey] || eventKey; // Fallback to original if not found
}

export { getFriendlyEventName };
