export const flowPalette = [
  {
    bg: "rgba(0, 255, 255, 0.12)",
    border: "#00FFFF",
    text: "#00FFFF",
  },
  {
    bg: "rgba(201, 17, 50, 0.18)",
    border: "#c91132",
    text: "#ff4764",
  },
  {
    bg: "rgba(226, 210, 39, 0.20)",
    border: "#e2d227",
    text: "#e2d227",
  },
  {
    bg: "rgba(255, 255, 255, 0.12)",
    border: "#ffffff",
    text: "#ffffff",
  },
];

export type FlowStyle = {
  bg: string;
  border: string;
  text: string;
};

export const buildFlowColors = (basket: any[]) => {
  const flowColors: Record<string, FlowStyle> = {};
  let paletteIndex = 0;

  if (basket) {
    for (const ans of basket) {
      const label = ans.flowRootOptionLabel;
      if (!label) continue;

      if (!flowColors[label]) {
        flowColors[label] = flowPalette[paletteIndex % flowPalette.length];
        paletteIndex++;
      }
    }
  }

  return flowColors;
};