import { expect, test } from "@playwright/test"
import BuscaPage from "./page/busca.page"

test.describe("Feature Busca", () => {
  const elementos = new BuscaPage()
  const url = "https://blogdoagi.com.br/"

  test.beforeEach(async ({ page }) => {
    await page.goto(url, { timeout: 6000 })
    await page.locator(elementos.buscarPage.iconeBusca).click()
  })

  test("Validar busca de texto que não existe na base", async ({ page }) => {
    await page.locator(elementos.buscarPage.campoBusca).fill("123456")
    await page
      .locator(elementos.buscarPage.botaoPesquisar, { hasText: "Pesquisar" })
      .first()
      .click()

    expect
      .soft(
        await page.locator(elementos.buscarPage.tituloErro).textContent(),
        `O título da página deve ser '${elementos.buscarPage.txtTituloErro}'`
      )
      .toEqual(elementos.buscarPage.txtTituloErro)

    expect
      .soft(
        await page.locator(elementos.buscarPage.subtituloErro).textContent(),
        `O subtítulo da página deve ser '${elementos.buscarPage.txtSubtituloErro}'`
      )
      .toEqual(elementos.buscarPage.txtSubtituloErro)
  })

  test("Validar busca de texto existente na base", async ({ page }) => {
    await page.locator(elementos.buscarPage.campoBusca).fill("Teste")
    await page
      .locator(elementos.buscarPage.botaoPesquisar, { hasText: "Pesquisar" })
      .first()
      .click()

    await expect
      .soft(
        page.locator(elementos.buscarPage.tituloSucesso),
        "O título da busca deve estar visível"
      )
      .toBeVisible()

    expect
      .soft(await page.locator(elementos.buscarPage.tituloSucesso).textContent())
      .toContain("Teste")

    expect
      .soft(await page.locator(elementos.buscarPage.listaArtigos).count())
      .toBeGreaterThanOrEqual(1)
  })
})
