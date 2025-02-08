import {create} from 'zustand';

interface MainStore {
    storeName: string;
    storeVersion: number;
}

const useMainStore = create<MainStore>((set) => ({
    storeName: 'Main Store',
    storeVersion: 1,
}));

export default useMainStore;