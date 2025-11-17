'use client';

import { useState, useMemo } from 'react';
import { 
  PencilIcon, DownloadIcon, XIcon, CheckIcon,
  AlertCircleIcon, AlertTriangleIcon, InfoIcon, CheckCircleIcon,
  PlayIcon, ChevronDownIcon, ChevronUpIcon, ChevronLeftIcon, ChevronRightIcon,
  MenuIcon, SearchIcon, SettingsIcon, UserIcon, MailIcon,
  HeartIcon, StarIcon, MoonIcon, SunIcon, HomeIcon,
  PlusIcon, MinusIcon, EditIcon, TrashIcon,
  EyeIcon, EyeOffIcon, CopyIcon, ShareIcon, UploadIcon,
  BellIcon, CalendarIcon, CameraIcon, ClockIcon, FilterIcon,
  FlagIcon, FolderIcon, GiftIcon, GlobeIcon, ImageIcon,
  LinkIcon, LockIcon, LogOutIcon, MessageCircleIcon,
  MoreHorizontalIcon, MoreVerticalIcon, PauseIcon, PhoneIcon,
  PrinterIcon, RefreshIcon, SaveIcon, SendIcon, ShoppingCartIcon,
  SlidersIcon, TagIcon, Trash2Icon, TrendingUpIcon, VideoIcon,
  VolumeIcon, WifiIcon, ZapIcon, FileIcon, FileTextIcon,
  BookmarkIcon, ArchiveIcon, ArrowLeftIcon, ArrowRightIcon,
  ArrowUpIcon, ArrowDownIcon, ExternalLinkIcon, MaximizeIcon, MinimizeIcon
} from '@/components/Icons';
import { Input } from '@/components/Input';
import styles from './page.module.css';

export default function IconsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const iconGroups = [
    {
      title: 'Edição',
      icons: [
        { name: 'PencilIcon', component: PencilIcon },
        { name: 'EditIcon', component: EditIcon },
        { name: 'TrashIcon', component: TrashIcon },
        { name: 'Trash2Icon', component: Trash2Icon },
        { name: 'CopyIcon', component: CopyIcon },
        { name: 'SaveIcon', component: SaveIcon },
        { name: 'ArchiveIcon', component: ArchiveIcon },
      ]
    },
    {
      title: 'Navegação',
      icons: [
        { name: 'ChevronDownIcon', component: ChevronDownIcon },
        { name: 'ChevronUpIcon', component: ChevronUpIcon },
        { name: 'ChevronLeftIcon', component: ChevronLeftIcon },
        { name: 'ChevronRightIcon', component: ChevronRightIcon },
        { name: 'ArrowLeftIcon', component: ArrowLeftIcon },
        { name: 'ArrowRightIcon', component: ArrowRightIcon },
        { name: 'ArrowUpIcon', component: ArrowUpIcon },
        { name: 'ArrowDownIcon', component: ArrowDownIcon },
        { name: 'MenuIcon', component: MenuIcon },
        { name: 'HomeIcon', component: HomeIcon },
        { name: 'ExternalLinkIcon', component: ExternalLinkIcon },
      ]
    },
    {
      title: 'Ações',
      icons: [
        { name: 'CheckIcon', component: CheckIcon },
        { name: 'XIcon', component: XIcon },
        { name: 'PlusIcon', component: PlusIcon },
        { name: 'MinusIcon', component: MinusIcon },
        { name: 'SearchIcon', component: SearchIcon },
        { name: 'FilterIcon', component: FilterIcon },
        { name: 'RefreshIcon', component: RefreshIcon },
        { name: 'MoreHorizontalIcon', component: MoreHorizontalIcon },
        { name: 'MoreVerticalIcon', component: MoreVerticalIcon },
        { name: 'MaximizeIcon', component: MaximizeIcon },
        { name: 'MinimizeIcon', component: MinimizeIcon },
      ]
    },
    {
      title: 'Alertas e Status',
      icons: [
        { name: 'AlertCircleIcon', component: AlertCircleIcon },
        { name: 'AlertTriangleIcon', component: AlertTriangleIcon },
        { name: 'InfoIcon', component: InfoIcon },
        { name: 'CheckCircleIcon', component: CheckCircleIcon },
        { name: 'BellIcon', component: BellIcon },
        { name: 'FlagIcon', component: FlagIcon },
        { name: 'TrendingUpIcon', component: TrendingUpIcon },
        { name: 'ZapIcon', component: ZapIcon },
      ]
    },
    {
      title: 'Arquivos e Mídia',
      icons: [
        { name: 'DownloadIcon', component: DownloadIcon },
        { name: 'UploadIcon', component: UploadIcon },
        { name: 'ShareIcon', component: ShareIcon },
        { name: 'PlayIcon', component: PlayIcon },
        { name: 'PauseIcon', component: PauseIcon },
        { name: 'FileIcon', component: FileIcon },
        { name: 'FileTextIcon', component: FileTextIcon },
        { name: 'FolderIcon', component: FolderIcon },
        { name: 'ImageIcon', component: ImageIcon },
        { name: 'VideoIcon', component: VideoIcon },
        { name: 'CameraIcon', component: CameraIcon },
        { name: 'VolumeIcon', component: VolumeIcon },
      ]
    },
    {
      title: 'Comunicação',
      icons: [
        { name: 'MailIcon', component: MailIcon },
        { name: 'MessageCircleIcon', component: MessageCircleIcon },
        { name: 'PhoneIcon', component: PhoneIcon },
        { name: 'SendIcon', component: SendIcon },
      ]
    },
    {
      title: 'Interface',
      icons: [
        { name: 'EyeIcon', component: EyeIcon },
        { name: 'EyeOffIcon', component: EyeOffIcon },
        { name: 'SettingsIcon', component: SettingsIcon },
        { name: 'SlidersIcon', component: SlidersIcon },
        { name: 'UserIcon', component: UserIcon },
        { name: 'LockIcon', component: LockIcon },
        { name: 'LogOutIcon', component: LogOutIcon },
      ]
    },
    {
      title: 'Negócios e E-commerce',
      icons: [
        { name: 'ShoppingCartIcon', component: ShoppingCartIcon },
        { name: 'TagIcon', component: TagIcon },
        { name: 'GiftIcon', component: GiftIcon },
        { name: 'PrinterIcon', component: PrinterIcon },
      ]
    },
    {
      title: 'Data e Localização',
      icons: [
        { name: 'CalendarIcon', component: CalendarIcon },
        { name: 'ClockIcon', component: ClockIcon },
        { name: 'GlobeIcon', component: GlobeIcon },
        { name: 'WifiIcon', component: WifiIcon },
      ]
    },
    {
      title: 'Geral',
      icons: [
        { name: 'HeartIcon', component: HeartIcon },
        { name: 'StarIcon', component: StarIcon },
        { name: 'MoonIcon', component: MoonIcon },
        { name: 'SunIcon', component: SunIcon },
        { name: 'BookmarkIcon', component: BookmarkIcon },
        { name: 'LinkIcon', component: LinkIcon },
      ]
    },
  ];

  const filteredGroups = useMemo(() => {
    if (!searchTerm.trim()) {
      return iconGroups;
    }

    const searchLower = searchTerm.toLowerCase();
    return iconGroups
      .map(group => ({
        ...group,
        icons: group.icons.filter(icon => 
          icon.name.toLowerCase().includes(searchLower)
        )
      }))
      .filter(group => group.icons.length > 0);
  }, [searchTerm]);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Icons</h1>
        <p className={styles.description}>
          Sistema de ícones baseado em Lucide React. Leve, consistente e com mais de 1000 ícones disponíveis.
        </p>
      </div>

      <section className={styles.section}>
        <h2>Biblioteca</h2>
        <p className={styles.hint}>
          Ícones mais comuns pré-configurados para uso rápido. Todos são tree-shakeable (apenas os usados são incluídos no bundle).
        </p>

        <div className={styles.searchWrapper}>
          <Input
            placeholder="Buscar ícones..."
            leftIcon={<SearchIcon size={18} />}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            fullWidth
          />
        </div>

        {filteredGroups.length === 0 ? (
          <p className={styles.noResults}>
            Nenhum ícone encontrado para "{searchTerm}"
          </p>
        ) : (
          filteredGroups.map((group) => (
          <div key={group.title} className={styles.componentGroup}>
            <h3>{group.title}</h3>
            <div className={styles.iconGrid}>
              {group.icons.map(({ name, component: Icon }) => (
                <div key={name} className={styles.iconItem}>
                  <div className={styles.iconPreview}>
                    <Icon size={24} />
                  </div>
                  <span className={styles.iconName}>{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))
        )}
      </section>

      <section className={styles.section}>
        <h2>Tamanhos</h2>
        <p className={styles.hint}>
          Ícones podem ter qualquer tamanho através da prop <code>size</code>.
        </p>
        <div className={styles.componentGroup}>
          <div className={styles.row} style={{ alignItems: 'center' }}>
            <div className={styles.item}>
              <SearchIcon size={16} />
              <span className={styles.label}>16px</span>
            </div>
            <div className={styles.item}>
              <SearchIcon size={20} />
              <span className={styles.label}>20px</span>
            </div>
            <div className={styles.item}>
              <SearchIcon size={24} />
              <span className={styles.label}>24px (padrão)</span>
            </div>
            <div className={styles.item}>
              <SearchIcon size={32} />
              <span className={styles.label}>32px</span>
            </div>
            <div className={styles.item}>
              <SearchIcon size={48} />
              <span className={styles.label}>48px</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Cores</h2>
        <p className={styles.hint}>
          Por padrão, ícones herdam a cor do texto (<code>currentColor</code>). Use a prop <code>color</code> para customizar.
        </p>
        <div className={styles.componentGroup}>
          <div className={styles.row}>
            <div className={styles.item}>
              <HeartIcon size={32} color="currentColor" />
              <span className={styles.label}>currentColor</span>
            </div>
            <div className={styles.item}>
              <HeartIcon size={32} color="#1d4ed8" />
              <span className={styles.label}>Blue</span>
            </div>
            <div className={styles.item}>
              <HeartIcon size={32} color="#16a34a" />
              <span className={styles.label}>Green</span>
            </div>
            <div className={styles.item}>
              <HeartIcon size={32} color="#dc2626" />
              <span className={styles.label}>Red</span>
            </div>
            <div className={styles.item}>
              <HeartIcon size={32} color="#f59e0b" />
              <span className={styles.label}>Orange</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Stroke Width</h2>
        <p className={styles.hint}>
          Ajuste a espessura das linhas com <code>strokeWidth</code>.
        </p>
        <div className={styles.componentGroup}>
          <div className={styles.row} style={{ alignItems: 'center' }}>
            <div className={styles.item}>
              <StarIcon size={32} strokeWidth={1} />
              <span className={styles.label}>1</span>
            </div>
            <div className={styles.item}>
              <StarIcon size={32} strokeWidth={1.5} />
              <span className={styles.label}>1.5</span>
            </div>
            <div className={styles.item}>
              <StarIcon size={32} strokeWidth={2} />
              <span className={styles.label}>2 (padrão)</span>
            </div>
            <div className={styles.item}>
              <StarIcon size={32} strokeWidth={2.5} />
              <span className={styles.label}>2.5</span>
            </div>
            <div className={styles.item}>
              <StarIcon size={32} strokeWidth={3} />
              <span className={styles.label}>3</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Como Usar</h2>
        <div className={styles.componentGroup}>
          <h3>Importação</h3>
          <pre className={styles.codeBlock}>
{`import { SearchIcon, HeartIcon, SettingsIcon } from '@/components/Icons';

// Uso básico
<SearchIcon />

// Com propriedades
<HeartIcon size={24} color="#dc2626" strokeWidth={2} />`}
          </pre>
        </div>

        <div className={styles.componentGroup}>
          <h3>Em Botões</h3>
          <pre className={styles.codeBlock}>
{`import { PencilIcon, TrashIcon } from '@/components/Icons';

<Button startIcon={<PencilIcon size={16} />}>
  Editar
</Button>

<IconButton icon={<TrashIcon />} variant="ghost" />`}
          </pre>
        </div>

        <div className={styles.componentGroup}>
          <h3>Ícones Adicionais</h3>
          <p className={styles.hint}>
            Para usar ícones não pré-configurados, importe diretamente do Lucide:
          </p>
          <pre className={styles.codeBlock}>
{`import { Camera, Wifi, Battery } from 'lucide-react';

<Camera size={20} />
<Wifi size={24} strokeWidth={1.5} />
<Battery size={18} />`}
          </pre>
          <p className={styles.hint} style={{ marginTop: 'var(--spacing-4)' }}>
            Ver todos os ícones disponíveis: <a href="https://lucide.dev/icons/" target="_blank" rel="noopener noreferrer">lucide.dev/icons</a>
          </p>
        </div>
      </section>
    </div>
  );
}
