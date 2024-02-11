/**
 * Gets the job details from the LinkedIn job page
 * when you click on the Apply or Save button.
 * @return {LinkedinJobDetails} The job details, including various information.
 */
function getLinkedinJobDetails() {
  const allDetails = document.querySelector('main')
      ?.textContent.replace(/\s+/g, ' ')
      ?.trim() ?? 'No details found';
  const howYouMatch = document.getElementById('how-you-match-card-container')
      ?.textContent.replace(/\s+/g, ' ')
      ?.trim() ?? 'No How you match details found';
  const jobDetails = document.getElementById('job-details')
      ?.textContent
      ?.trim() ?? 'No Job details found';
  const companyDetails = document.getElementsByClassName('jobs-company__box')[0]
      ?.textContent
      ?.trim() ?? 'No Company details found';

  const linkedinJobDetails = {
    allDetails,
    howYouMatch,
    jobDetails,
    companyDetails,
  };

  return linkedinJobDetails;
}

addEventListener('click', (event) => {
  if (event.target.textContent.includes('Save')) {
    console.log('Save button clicked');
    console.log(getLinkedinJobDetails().allDetails);
    console.log(getLinkedinJobDetails().howYouMatch);
    console.log(getLinkedinJobDetails().jobDetails);
    console.log(getLinkedinJobDetails().companyDetails);
  }

  if (event.target.textContent.includes('Apply')) {
    getLinkedinJobDetails();
  }
});
