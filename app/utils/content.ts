import type { ContentNavigationItem, ContentCollectionItem } from '@nuxt/content'

export function mapContentNavigationItem(item: ContentNavigationItem) {
    const navMap = {
        title: 'label',
        path: 'to'
    }

    return Object.keys(item).reduce((link, key) => {
        if (item[key]) {
            const mappedKey: string = navMap[key as keyof typeof navMap] || key
            link[mappedKey] = item[key]
        }
        return link
    }, {} as Omit<ContentNavigationItem, 'title' | 'path'> & { label?: string, to?: string })
}

export function mapContentNavigation(navigation: ContentNavigationItem[]) {
    return navigation.map(item => mapContentNavigationItem(item))
}