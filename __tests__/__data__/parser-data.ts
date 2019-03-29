import * as styles from '../../src/Engine/Parsers/Modules/HTML/styles';

export const hierarchyTestXml: string = `
<chapter xmlns="http://docs.oasis-open.org/legaldocml/ns/akn/3.0">
<num>CHAPTER I</num>
<heading>The first <b>chapter</b> in the <i>advanced</i> xml test.</heading>
  <intro><p>This will be the only chapter in the advanced test.</p></intro>
  <section>
      <num>SECTION 1</num>
      <heading>The First Section</heading>
      <content>
          <p>This section tests a level with only content</p>
      </content>
  </section>
  <section>
      <num>SECTION 2</num>
      <heading>The Second Section</heading>
      <intro>
          <p>This section tests a level with content and a sub-level</p>
      </intro>
      <subsection>
        <num>SUBSECTION 1</num>
        <heading>The First and Only Subsection</heading>
        <content><p>This is the subsection of section 2.</p></content>
      </subsection>
  </section>
  <wrapUp><p>That concludes the advanced test.</p></wrapUp>
</chapter>
`;

export const hierarchyTestOutput: string = `<p data-element=\"chapter\"><span data-inline=\"num\" style=\"${styles.num}\">CHAPTER I</span> <span data-inline=\"heading\" style=\"${styles.heading}\">The first <b>chapter</b> in the <i>advanced</i> xml test.</span></p><p>This will be the only chapter in the advanced test.</p><p style=\"margin-left: 30px;\" data-element=\"section\"><span data-inline=\"num\" style=\"${styles.num}\">SECTION 1</span> <span data-inline=\"heading\" style=\"${styles.heading}\">The First Section</span></p><p style=\"margin-left: 30px;\">This section tests a level with only content</p><p style=\"margin-left: 30px;\" data-element=\"section\"><span data-inline=\"num\" style=\"${styles.num}\">SECTION 2</span> <span data-inline=\"heading\" style=\"${styles.heading}\">The Second Section</span></p><p style=\"margin-left: 30px;\">This section tests a level with content and a sub-level</p><p style=\"margin-left: 60px;\" data-element=\"subsection\"><span data-inline=\"num\" style=\"${styles.num}\">SUBSECTION 1</span> <span data-inline=\"heading\" style=\"${styles.heading}\">The First and Only Subsection</span></p><p style=\"margin-left: 60px;\">This is the subsection of section 2.</p><p>That concludes the advanced test.</p>`;
