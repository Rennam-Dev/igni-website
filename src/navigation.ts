import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Início',
      href: getPermalink('/'),
    },
    {
      text: 'Sobre',
      href: getPermalink('/sobre'),
    },
    {
      text: 'Serviços',
      href: getPermalink('/servicos'),
    },
    {
      text: 'Como Funciona',
      href: getPermalink('/como-funciona'),
    },
    {
      text: 'Cases',
      href: getPermalink('/cases'),
    },
    {
      text: 'Preços',
      href: getPermalink('/precos'),
    },
    {
      text: 'Blog',
      href: getPermalink('/blog'),
    },
  ],
  actions: [
    {
      text: 'Agendar Consultoria',
      href: 'https://cal.com/ignidigital/consultoria',
      target: '_blank',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Produto',
      links: [
        { text: 'Serviços', href: '/servicos' },
        { text: 'Como Funciona', href: '/como-funciona' },
        { text: 'Preços', href: '/precos' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { text: 'Sobre', href: '/sobre' },
        { text: 'Cases', href: '/cases' },
        { text: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Soluções',
      links: [
        { text: 'Clínicas Dentárias', href: '/clinicas-dentarias' },
        { text: 'Estéticas e Salões', href: '/esteticas-e-saloes' },
        { text: 'Clínicas Veterinárias', href: '/clinicas-veterinarias' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Termos de Uso', href: '/termos' },
    { text: 'Política de Privacidade', href: '/privacidade' },
  ],
  socialLinks: [
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/5511999999999' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
  ],
  footNote: `
    © 2025 Igni Digital. Todos os direitos reservados.
    <a class="text-blue-600 hover:underline" href="https://taskni.app">Powered by Taskni</a>
  `,
};
