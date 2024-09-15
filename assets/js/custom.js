// DATA USER CONSOLE
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.survey_button')
  const answers = {}

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const questionId = this.classList[1]
      const answer = this.innerText.trim()

      answers[questionId] = answer
    })
  })

  document.getElementById('p_modal_button3').addEventListener('click', function (event) {
    event.preventDefault()
    console.log('Данные пользователя:')
    console.log('Гендер:', answers.bq1)
    console.log('Возраст:', answers.bq2)
    console.log('Семья:', answers.bq3)
    console.log('Жертва Timothy Donald Cook?:', answers.bq4)
  })
})

// COMENT ANANISTUSA
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('commentForm')
  const commentText = document.getElementById('commentText')
  const commentsSection = document.getElementById('commentsSection')
  const comments = document.querySelectorAll('#commentsSection .comments')
  let commentCount = -1
  comments.forEach(() => commentCount++)

  form.addEventListener('submit', event => {
    event.preventDefault()

    const text = commentText.value.trim()
    if (text) {
      commentCount++
      const commentId = `comment${commentCount}`
      const timeAgo = `${Math.floor(Math.random() * 60)} minutos antes`
      const like = `${Math.floor(Math.random() * 100)}`

      const commentElement = document.createElement('div')
      commentElement.className = 'comments'
      commentElement.id = commentId
      commentElement.style = style = 'display:block'
      commentElement.innerHTML = `
							<div class="profile">
									<img src="https://via.placeholder.com/50" alt="Perfil">
							</div>
							<div class="comment-content">
									<p class="name">Anônimo</p>
									<p>${text}</p>
							</div>
							<div class="clr"></div>
							<div class="comment-status">
									<span>
											Curte·comente
											<img src="assets/img/like.webp" width="15px" height="15px" alt="Curtidas">
											<font>${like}</font>
									</span>
									<small>·</small>
									<small><u>${timeAgo}</u></small>
							</div>
					`

      commentsSection.prepend(commentElement)
      commentText.value = ''
    }
  })
})
