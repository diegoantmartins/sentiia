 codex/transform-chatwoot-into-synapsea-connect-x6j2jp
import { inMemoryEventStore } from './inMemoryEventStore.js';

 develop
import type { AnalyticsEventPayload } from '../validators/event.validator.js';

export class EventStoreRepository {
  async saveRawEvent(event: AnalyticsEventPayload) {
 codex/transform-chatwoot-into-synapsea-connect-x6j2jp
    return inMemoryEventStore.add(event);
  }

  async listRawEvents() {
    return inMemoryEventStore.list();

    return {
      id: crypto.randomUUID(),
      processingStatus: 'pending',
      receivedAt: new Date().toISOString(),
      ...event,
    };
 develop
  }
}
