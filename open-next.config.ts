import { defineCloudflareConfig } from "@opennextjs/cloudflare";
 
export default defineCloudflareConfig({
  // Disable R2 cache for now - use default caching
  // incrementalCache: r2IncrementalCache,
});

