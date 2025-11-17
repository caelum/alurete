import React from 'react';
import styles from './Footer.module.css';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  sections?: FooterSection[];
  socialLinks?: {
    youtube?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    discord?: string;
  };
  appLinks?: {
    googlePlay?: string;
    appStore?: string;
  };
  logoSrc?: string;
  responsive?: boolean;
}

const defaultSections: FooterSection[] = [
  {
    title: 'A ALURA',
    links: [
      { label: 'Sobre a Alura', href: '#' },
      { label: 'Dúvidas frequentes', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Discord', href: '#' },
    ],
  },
  {
    title: 'SUGIRA',
    links: [
      { label: 'Um curso', href: '#' },
      { label: 'Uma funcionalidade', href: '#' },
    ],
  },
  {
    title: 'EXTENSÕES',
    links: [
      { label: 'Graduação', href: '#' },
      { label: 'Pós - Graduação', href: '#' },
      { label: 'MBA', href: '#' },
    ],
  },
];

export const Footer: React.FC<FooterProps> = ({
  sections = defaultSections,
  socialLinks = {},
  appLinks = {},
  logoSrc = 'http://localhost:3845/assets/bc93b8712e3bb00c340c4a8aa7d63f1328f8ce76.svg',
  responsive = true,
}) => {
  return (
    <footer className={`${styles.footer} ${responsive ? styles.responsive : ''}`}>
      <div className={styles.content}>
        {/* Logo + Sections */}
        <div className={styles.leftSection}>
          {/* Logo */}
          <div className={styles.logoContainer}>
            <img src={logoSrc} alt="Alura" className={styles.logo} />
          </div>

          {/* Navigation Sections */}
          <div className={styles.sections}>
            {sections.map((section, index) => (
              <div key={index} className={styles.section}>
                <h3 className={styles.sectionTitle}>{section.title}</h3>
                <ul className={styles.linkList}>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href} className={styles.link}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Social + Apps */}
        <div className={styles.rightSection}>
          {/* Social Networks */}
          <div className={styles.socialSection}>
            <h3 className={styles.sectionTitle}>NOSSAS REDES</h3>
            <div className={styles.socialIcons}>
              {socialLinks.youtube && (
                <a href={socialLinks.youtube} className={styles.socialIcon} aria-label="YouTube">
                  <img src="http://localhost:3845/assets/cae9884a5da05239094e8d5d95e72793ca31a8da.svg" alt="YouTube" />
                </a>
              )}
              {socialLinks.facebook && (
                <a href={socialLinks.facebook} className={styles.socialIcon} aria-label="Facebook">
                  <img src="http://localhost:3845/assets/a2aa6d2d2546122b70d57e1ca7ba1124eb2f32a6.svg" alt="Facebook" />
                </a>
              )}
              {socialLinks.twitter && (
                <a href={socialLinks.twitter} className={styles.socialIcon} aria-label="Twitter">
                  <img src="http://localhost:3845/assets/450431314f591b2fd8e4ee5143f10fbb570fafec.svg" alt="Twitter" />
                </a>
              )}
              {socialLinks.instagram && (
                <a href={socialLinks.instagram} className={styles.socialIcon} aria-label="Instagram">
                  <img src="http://localhost:3845/assets/10a1413277b93a0062cec1be55f3fbcb555da38d.svg" alt="Instagram" />
                </a>
              )}
              {socialLinks.discord && (
                <a href={socialLinks.discord} className={styles.socialIcon} aria-label="Discord">
                  <img src="http://localhost:3845/assets/23916dd0fbdda64b7e82dde3290fcf70fd2edd6d.svg" alt="Discord" />
                </a>
              )}
            </div>
          </div>

          {/* App Links */}
          <div className={styles.appsSection}>
            <h3 className={styles.sectionTitle}>APPS</h3>
            <div className={styles.appIcons}>
              {appLinks.googlePlay && (
                <a href={appLinks.googlePlay} className={styles.appIcon} aria-label="Google Play">
                  <img src="http://localhost:3845/assets/23380b46213a38567f209c8f44103aec8120b7a2.svg" alt="Google Play" />
                </a>
              )}
              {appLinks.appStore && (
                <a href={appLinks.appStore} className={styles.appIcon} aria-label="App Store">
                  <img src="http://localhost:3845/assets/0754e46e7f55726ee4da4f299eb43998b71a7e15.svg" alt="App Store" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
