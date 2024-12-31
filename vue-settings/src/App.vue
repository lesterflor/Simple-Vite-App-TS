<script setup lang="ts">
import { computed, ref } from 'vue';
import { TabKey, type ITab } from '@/types';
import TabLink from '@/components/TabLink.vue';
import GeneralSettings from '@/components/GeneralSettings.vue';
import NotificationSettings from '@/components/NotificationSettings.vue';
import PrivacySettings from '@/components/PrivacySettings.vue';
import FadeTransition from '@/components/FadeTransition.vue';
import NotificationList from '@/components/NotificationList.vue';

const tabs: ITab[] = [
  {
    key: TabKey.general,
    label: 'General',
    component: GeneralSettings
  },
  {
    key: TabKey.notifications,
    label: 'Notifications',
    component: NotificationSettings
  },
  {
    key: TabKey.privacy,
    label: 'Privacy',
    component: PrivacySettings
  }
];

const currentTabComponent = computed(
  () => tabs.find((tab) => tab.key === currentTab.value)?.component
);

const currentTab = ref<TabKey>(TabKey.general);
</script>

<template>
  <main class="max-w-2xl mx-auto px-4">
    <nav class="font-medium text-center text-gray-500 border-b border-gray-200 mb-4">
      <ul class="flex flex-wrap -mb-px">
        <li v-for="tab in tabs" :key="tab.key">
          <TabLink :tab="tab" :currentTab="currentTab" @click="currentTab = tab.key" />
        </li>
      </ul>
    </nav>
    <FadeTransition>
      <KeepAlive>
        <component :is="currentTabComponent" />
      </KeepAlive>
    </FadeTransition>
    <NotificationList />
  </main>
</template>
