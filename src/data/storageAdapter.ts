import { CategoryRecord, StorageStatus, WebsiteRecord } from './types';
import { loadCategories, saveCategories } from './categoryRegistry';
import { loadWebsites, saveWebsites } from './websiteRegistry';

/**
 * Storage Adapter for RAOZ LEGAL SAMPLE
 * Keeps Category Registry and Website Registry separate in localStorage
 * and provides clean async integration hooks for future backend/database APIs.
 */
export const storageAdapter = {
  getStatus(): StorageStatus {
    const apiEndpoint = import.meta.env.VITE_LIBRARY_API_URL;
    return {
      mode: apiEndpoint ? 'remote-api' : 'browser-local',
      lastSyncedAt: new Date().toISOString(),
      endpointConfigured: Boolean(apiEndpoint),
    };
  },

  getCategories(): CategoryRecord[] {
    return loadCategories();
  },

  persistCategories(categories: CategoryRecord[]): void {
    saveCategories(categories);
  },

  getWebsites(): WebsiteRecord[] {
    return loadWebsites();
  },

  persistWebsites(websites: WebsiteRecord[]): void {
    saveWebsites(websites);
  },

  exportRegistryBundle(): string {
    const payload = {
      project: 'RAOZ LEGAL SAMPLE',
      exportedAt: new Date().toISOString(),
      storageMode: this.getStatus().mode,
      categories: this.getCategories(),
      websites: this.getWebsites(),
    };
    return JSON.stringify(payload, null, 2);
  },
};
