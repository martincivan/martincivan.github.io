export const profile = {
  name: 'Martin Civáň',
  credential: 'Ing.',
  email: 'martin.civan5@gmail.com',
  phone: '+421 907 781 677',
  location: 'Bratislava, Slovakia',
  github: 'github.com/martincivan',
  linkedin: 'linkedin.com/in/martincivan',
  website: 'martincivan.github.io',
  tagline: 'Platform & DevSecOps Engineer · Technical founder',
  // Default summary used by the website and as the CV fallback when a
  // job-specific profile doesn't override it.
  summary:
    'Platform & DevSecOps engineer and product builder. I build and run the cloud-native foundation behind Slovakia’s national e-government — provisioning clusters as code and designing the GitOps and security underneath — and have a track record of taking products from idea to working reality and scaling them, across web apps and applied AI.',
};

export type Profile = typeof profile;
