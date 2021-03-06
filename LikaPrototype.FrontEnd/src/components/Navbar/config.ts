import { FC } from 'react';
import {
    SearchIcon,
    HomeIcon,
    BookIcon,
    ProgressIcon,
    WriteIcon,
    DictionaryIcon,
    HelpIcon,
    AlphabetIcon,
} from '../../assets/icons';
import { spaUrls } from '../../common/urls';

export enum NavigationItemType {
    Link,
    Separator,
}
export type NavigationItem =
    | {
          id: string;
          type: NavigationItemType.Link;
          name: string;
          link: string;
          matchExact?: boolean;
          icon: FC;
      }
    | { id: string; type: NavigationItemType.Separator };

export const navigationItems: NavigationItem[] = [
    {
        id: 'home',
        type: NavigationItemType.Link,
        name: 'Home',
        link: spaUrls.home(),
        matchExact: true,
        icon: HomeIcon,
    },
    {
        id: 'dictionary',
        type: NavigationItemType.Link,
        name: 'Dictionary',
        link: spaUrls.dictionary.dictionary(),
        icon: DictionaryIcon,
    },
    {
        id: 'vocabulary',
        type: NavigationItemType.Link,
        name: 'Vocabulary training',
        link: spaUrls.vocabulary.vocabulary(),
        icon: AlphabetIcon,
    },
    {
        id: 'reading',
        type: NavigationItemType.Link,
        name: 'Reading training',
        link: spaUrls.reading.reading(),
        icon: BookIcon,
    },
    {
        id: 'grammar',
        type: NavigationItemType.Link,
        name: 'Grammar training',
        link: spaUrls.writing.writing(),
        icon: WriteIcon,
    },
    {
        id: 'content',
        type: NavigationItemType.Link,
        name: 'Explore content',
        link: spaUrls.explore.explore(),
        icon: SearchIcon,
    },
    {
        id: 'separator-1',
        type: NavigationItemType.Separator,
    },
    {
        id: 'progress',
        type: NavigationItemType.Link,
        name: 'Progress analysis',
        link: spaUrls.progress.progress(),
        icon: ProgressIcon,
    },
    {
        id: 'help',
        type: NavigationItemType.Link,
        name: 'Help',
        link: spaUrls.help(),
        icon: HelpIcon,
    },
];
