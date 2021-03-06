import {render, screen} from "@testing-library/react";
import CounterFieldHeader from "../CounterFieldHeader";

function renderComponent() {
  render(<CounterFieldHeader
    wordsAmount={3}
    liveCount={true}
    charactersAmount={10}
  />)
}

describe('header correctly render all props', () => {
  beforeEach(() => {
    renderComponent()
  })

  it('words amount showed correctly', () => {
    const wordsHeading = screen.getByText(/words/i)

    expect(wordsHeading.textContent).toContain('3')
  })

  it('characters amount showed correctly', () => {
    const charactersHeading = screen.getByText(/characters/i)

    expect(charactersHeading.textContent).toContain('10')
  })

  it('live count checkbox is checked', () => {
    const liveCountCheckbox = screen.getByRole('checkbox')

    expect(liveCountCheckbox).toBeChecked()
  })
})