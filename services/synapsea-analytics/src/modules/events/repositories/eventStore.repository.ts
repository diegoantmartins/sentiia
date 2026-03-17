 codex/transform-chatwoot-into-synapsea-connect-7fgcn5
 codex/transform-chatwoot-into-synapsea-connect-7fgcn5

 codex/transform-chatwoot-into-synapsea-connect-9ntkpr
import { inMemoryEventStore } from './inMemoryEventStore.js';

 codex/transform-chatwoot-into-synapsea-connect-2i3fp8
import { inMemoryEventStore } from './inMemoryEventStore.js';

 codex/transform-chatwoot-into-synapsea-connect-6xbxtt
import { inMemoryEventStore } from './inMemoryEventStore.js';

 codex/transform-chatwoot-into-synapsea-connect-vkjace
import { inMemoryEventStore } from './inMemoryEventStore.js';

 codex/transform-chatwoot-into-synapsea-connect-ymy4px
 develop
import { inMemoryEventStore } from './inMemoryEventStore.js';

 codex/transform-chatwoot-into-synapsea-connect-nhivec
import { inMemoryEventStore } from './inMemoryEventStore.js';

 develop
 develop
 codex/transform-chatwoot-into-synapsea-connect-7fgcn5

 develop
 develop
 develop
 develop
 develop
import type { AnalyticsEventPayload } from '../validators/event.validator.js';

export class EventStoreRepository {
  async saveRawEvent(event: AnalyticsEventPayload) {
 codex/transform-chatwoot-into-synapsea-connect-7fgcn5
 codex/transform-chatwoot-into-synapsea-connect-7fgcn5

 codex/transform-chatwoot-into-synapsea-connect-nhivec
 develop

 codex/transform-chatwoot-into-synapsea-connect-9ntkpr

 codex/transform-chatwoot-into-synapsea-connect-2i3fp8

 codex/transform-chatwoot-into-synapsea-connect-6xbxtt

 codex/transform-chatwoot-into-synapsea-connect-vkjace

 codex/transform-chatwoot-into-synapsea-connect-ymy4px

 codex/transform-chatwoot-into-synapsea-connect-nhivec
 develop
 develop
 develop
 develop
 develop
 develop
    return inMemoryEventStore.add(event);
  }

  async listRawEvents() {
    return inMemoryEventStore.list();
 codex/transform-chatwoot-into-synapsea-connect-7fgcn5
 codex/transform-chatwoot-into-synapsea-connect-7fgcn5

 codex/transform-chatwoot-into-synapsea-connect-9ntkpr

 codex/transform-chatwoot-into-synapsea-connect-2i3fp8

 codex/transform-chatwoot-into-synapsea-connect-6xbxtt

 codex/transform-chatwoot-into-synapsea-connect-vkjace

 codex/transform-chatwoot-into-synapsea-connect-ymy4px
 develop


    return {
      id: crypto.randomUUID(),
      processingStatus: 'pending',
      receivedAt: new Date().toISOString(),
      ...event,
    };
 develop
 develop
 codex/transform-chatwoot-into-synapsea-connect-7fgcn5

 develop
 develop
 develop
 develop
 develop
  }
}
