import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.ts", // Punto de entrada de la biblioteca
      name: "MyLibrary",
      fileName: (format) => `my-library.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Excluir dependencias de React
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
