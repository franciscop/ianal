module.exports.name = 'CC0';

module.exports.regex = /CC0/;

module.exports.text = `
  The person who associated a work with this deed has dedicated the work to the
  public domain by waiving all of his or her rights to the work worldwide under
  copyright law, including all related and neighboring rights, to the extent
  allowed by law.

  You can copy, modify, distribute and perform the work, even for commercial
  purposes, all without asking permission.
`;

module.exports.fragments = module.exports.text.split(/\n\n/);
