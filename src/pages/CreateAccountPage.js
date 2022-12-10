const CreateAccountPage = () => {
  return (
    <div>
      <h1>Create Your Account</h1>
      {/* {error && <p>Login error</p>} */}
      <input placeholder='Your email address' />
      <input placeholder='Your password' />
      <button>Create Account</button>
    </div>
  )
}
export default CreateAccountPage
