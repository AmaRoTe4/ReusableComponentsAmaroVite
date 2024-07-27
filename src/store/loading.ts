import { create } from "zustand";

interface LoadingState {
  getLoading: boolean;
  setLoading: (curretPage: boolean) => void;
}

const useLoadingStore = create<LoadingState>()((set) => ({
  getLoading: false,
  setLoading: (res: boolean) => set(() => ({ getLoading: res })),
}));

export default useLoadingStore;
