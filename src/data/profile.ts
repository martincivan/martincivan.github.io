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
    'Platform & DevSecOps engineer who builds and runs the cloud-native foundation behind Slovakia’s national e-government. I provision clusters as code, design the GitOps and security underneath, and have a track record of leading and shipping products end to end — from native apps to applied AI.',
};

export type Profile = typeof profile;
