<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: [String, Number],
    required: true,
  },
 codex/transform-chatwoot-into-synapsea-connect-9ntkpr
  delta: {
    type: Number,
    default: 0,

  deltaText: {
    type: String,
    default: '',
  },
  isPositiveDelta: {
    type: Boolean,
    default: true,
 develop
  },
  comparisonLabel: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <article class="rounded-xl border border-n-weak bg-n-solid-1 p-3">
    <p class="m-0 text-xs font-medium text-n-slate-11">
      {{ label }}
    </p>
    <p class="m-0 mt-1 text-xl font-semibold text-n-slate-12">
      {{ value }}
    </p>
    <p
      class="m-0 mt-1 text-xs"
 codex/transform-chatwoot-into-synapsea-connect-9ntkpr
      :class="delta >= 0 ? 'text-n-teal-10' : 'text-n-ruby-9'"
    >
      {{ delta >= 0 ? '+' : '' }}{{ delta }}% {{ comparisonLabel }}

      :class="isPositiveDelta ? 'text-n-teal-10' : 'text-n-ruby-9'"
    >
      {{ deltaText }} {{ comparisonLabel }}
 develop
    </p>
  </article>
</template>
