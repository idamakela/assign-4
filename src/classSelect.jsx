export default () => {
    return(
        <>
        <label htmlFor="class">I am a</label>

        <select name="class" id="class">
            <option value="none" selected disabled hidden>class</option>
            <option value="bard">bard</option>
            <option value="cleric">cleric</option>
            <option value="druid">druid</option>
            <option value="paladin">paladin</option>
            <option value="sorcerer">sorcerer</option>
            <option value="wizard">wizard</option>
            <option value="warlock">warlock</option>
        </select>
        </>
    )
}