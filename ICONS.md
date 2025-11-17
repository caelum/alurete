# Ícones - Guia de Uso

Este projeto usa **Lucide React** para ícones. É uma biblioteca leve, tree-shakeable (otimizada automaticamente) e com mais de 1000 ícones consistentes.

## Como Usar

### Importação Simples

```tsx
import { PencilIcon, DownloadIcon, SearchIcon } from '@/components/Icons';

// Em qualquer componente
<PencilIcon size={24} />
<SearchIcon size={16} color="#1d4ed8" />
```

### Ícones Disponíveis Pré-configurados

Os ícones mais comuns já estão exportados com nomes intuitivos:

- **Edição**: `PencilIcon`, `EditIcon`, `TrashIcon`, `CopyIcon`
- **Navegação**: `ChevronDownIcon`, `ChevronUpIcon`, `ChevronLeftIcon`, `ChevronRightIcon`, `MenuIcon`, `HomeIcon`
- **Ações**: `CheckIcon`, `XIcon`, `PlusIcon`, `MinusIcon`, `SearchIcon`
- **Alertas**: `AlertCircleIcon`, `AlertTriangleIcon`, `InfoIcon`, `CheckCircleIcon`
- **Arquivos**: `DownloadIcon`, `UploadIcon`, `ShareIcon`
- **UI**: `EyeIcon`, `EyeOffIcon`, `SettingsIcon`, `UserIcon`, `MailIcon`
- **Geral**: `HeartIcon`, `StarIcon`, `MoonIcon`, `SunIcon`, `PlayIcon`

### Propriedades Disponíveis

```tsx
<PencilIcon 
  size={24}              // Tamanho do ícone (padrão: 24)
  color="#1d4ed8"        // Cor (padrão: currentColor)
  strokeWidth={2}        // Espessura da linha (padrão: 2)
  className="my-class"   // Classe CSS customizada
/>
```

### Usar Qualquer Ícone do Lucide

Se precisar de um ícone que não está na lista pré-configurada:

```tsx
import { Camera, Wifi, Battery } from 'lucide-react';

<Camera size={20} />
<Wifi size={24} strokeWidth={1.5} />
<Battery size={18} />
```

**Ver todos os ícones disponíveis:** https://lucide.dev/icons/

## Exemplos de Uso

### Em Botões

```tsx
import { PencilIcon, TrashIcon } from '@/components/Icons';

<Button startIcon={<PencilIcon size={16} />}>
  Editar
</Button>

<IconButton icon={<TrashIcon size={20} />} variant="ghost" />
```

### Em Alerts

```tsx
import { AlertTriangleIcon } from '@/components/Icons';

<Alert variant="warning">
  <AlertTriangleIcon size={24} />
  Atenção: Esta ação não pode ser desfeita
</Alert>
```

### Com Animações

```tsx
import { Heart } from 'lucide-react';

<Heart 
  size={24} 
  fill={liked ? "red" : "none"}
  color={liked ? "red" : "currentColor"}
  style={{ transition: 'all 0.3s' }}
/>
```

## Benefícios

✅ **Tree-shaking**: Apenas os ícones que você usa são incluídos no bundle final  
✅ **Leve**: ~1kb por ícone  
✅ **Consistente**: Todos os ícones seguem o mesmo design  
✅ **Acessível**: Suporta aria-labels automaticamente  
✅ **Customizável**: Todas as propriedades SVG disponíveis  

## Ícones de Redes Sociais

Para ícones de redes sociais (Google, Microsoft, Facebook, Apple), use os componentes customizados:

```tsx
import { GoogleIcon, MicrosoftIcon, FacebookIcon, AppleIcon } from '@/components/Icons';

<GoogleIcon />
<MicrosoftIcon />
```

Estes são SVGs customizados que mantêm as cores originais das marcas.
