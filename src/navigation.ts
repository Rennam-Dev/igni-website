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
      title: 'Soluções',
      links: [
        { text: 'Para Saúde & Bem-estar', href: '/saude' },
        { text: 'Para E-commerce', href: '/ecommerce' },
        { text: 'Para Educação', href: '/educacao' },
        { text: 'Para Imóveis', href: '/imoveis' },
        { text: 'Para Serviços Locais', href: '/servicos-locais' },
      ],
    },
    {
      title: 'Produto',
      links: [
        { text: 'Serviços', href: '/servicos' },
        { text: 'Como Funciona', href: '/como-funciona' },
        { text: 'Preços', href: '/precos' },
        { text: 'Cases de Sucesso', href: '/cases' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { text: 'Sobre Nós', href: '/sobre' },
        { text: 'Blog', href: '/blog' },
        { text: 'Contato', href: '/contato' },
        { text: 'FAQ', href: '/#faq' },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { text: 'Central de Ajuda', href: '/ajuda' },
        { text: 'API Taskni', href: 'https://taskni.app/api' },
        { text: 'Status do Sistema', href: 'https://status.taskni.app' },
        { text: 'Roadmap', href: '/roadmap' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Termos de Uso', href: '/termos' },
    { text: 'Política de Privacidade', href: '/privacidade' },
    { text: 'LGPD', href: '/lgpd' },
  ],
  socialLinks: [
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/5511999999999' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/Rennam-Dev' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Igni Digital. Todos os direitos reservados.
    <a class="text-blue-600 hover:underline dark:text-blue-400" href="https://taskni.app" target="_blank" rel="noopener">Powered by Taskni</a>
  `,
};
