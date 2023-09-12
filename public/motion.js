
export const navVariants1 = {
    hidden: {
      opacity: 0,
      y: 0,
      transition: {},
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        delay: 0.2,
      },
    },
  };
  
  export const navVariants2 = {
    hidden: {
      opacity: 0,
      y: -120,
      transition: {
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 0.5,
      },
    },
  };
  
  export const navVariants3 = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        delay: 1,
      },
    },
  };
  
  export const navVariants4 = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        stiffness: 80,
        delay: 1.3,
      },
    },
  };
  
  