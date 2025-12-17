import type { IconMap, ExternalLink, Site } from '@/types'

export const SITE: Site = {
  title: 'wood',
  description:
    'Add your site description here.',
  href: 'https://yellowcanstop.github.io/wood',
  author: 'author_name',
  locale: 'en-US',
  postsPerPage: 3,
}

export const NAV_LINKS: ExternalLink[] = [
  {
    href: `${import.meta.env.BASE_URL}/blog/`,
    label: 'my works',
  },
  {
    href: `${import.meta.env.BASE_URL}/about/`,
    label: 'about me',
  }
]

export const SOCIAL_LINKS: ExternalLink[] = [
  {
    href: 'https://facebook.com',
    label: 'Facebook',
  },
  {
    href: 'mailto:author_name@example.com',
    label: 'Email',
  }
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  Facebook: 'lucide:facebook',
  Email: 'lucide:mail'
}
