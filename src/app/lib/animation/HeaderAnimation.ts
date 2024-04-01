export const listItemVariants = {
  closed: {
    x: -30,
    opacity: 0,
  },
  opened: {
    x: 0,
    opacity: 1,
  },
};
export const listVariants = {
  closed: {
    x: '100vw',
  },
  opened: {
    x: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};
