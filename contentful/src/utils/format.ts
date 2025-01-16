const getISIShortname = (val: string) => {
  const pattern = new RegExp('®|™|℠', 'g');
  return val.toLowerCase().split(pattern)[0].replace('é', 'e');
};

export { getISIShortname };
