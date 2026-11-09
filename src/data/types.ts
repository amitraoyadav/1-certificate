export interface CategoryRecord {
  id: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  isDefault?: boolean;
}

export interface UploadedZipMeta {
  fileName: string;
  fileSize: number;
  uploadedAt: string;
}

export interface WebsiteRecord {
  id: string; // e.g. "website-001"
  name: string;
  referenceUrl: string;
  categoryId: string;
  categoryName: string;
  description: string;
  recreationPrompt: string;
  modulePath: string; // e.g. "src/websites/website-001/"
  hasBuiltInModule: boolean;
  zipMeta?: UploadedZipMeta;
  screenshotDataUrl?: string;
  pagesCount?: number;
  createdAt: string;
}

export interface StorageStatus {
  mode: 'browser-local' | 'remote-api';
  lastSyncedAt: string;
  endpointConfigured: boolean;
}
