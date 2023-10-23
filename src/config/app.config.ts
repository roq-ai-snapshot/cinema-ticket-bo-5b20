interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Booking Manager', 'Technical Support'],
  tenantName: 'Cinema',
  applicationName: 'Cinema Ticket Booking System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read cinema information', 'Read movie details', 'Create bookings', 'Report technical issues'],
  ownerAbilities: ['Manage user data', 'Manage cinema data', 'Manage movie data', 'Manage bookings'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/b2366be1-9cdf-4b00-b175-638fb6087fc4',
};
