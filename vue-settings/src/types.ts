import type { Component } from 'vue';

export interface ITab {
  key: TabKey;
  label: string;
  component: Component;
}

// export type TabKey = 'General' | 'Notifications' | 'Privacy';

export enum TabKey {
  general = 'General',
  notifications = 'Notifications',
  privacy = 'Privacy'
}
