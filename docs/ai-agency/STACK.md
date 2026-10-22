# Minimal, low-cost AI production stack

## Current hardware assumption (verify on device)
Lenovo Legion 5 16IRX9 / RTX 4060 Laptop GPU (8 GB VRAM), 32 GB RAM, Core i9, Omarchy Linux. Check with `nvidia-smi`, `free -h` and `lsblk -f` (read-only). Avoid modifying partitions during initial setup.

## Install order
| Tool | Role | Why now |
|---|---|---|
| Ollama | Local LLM inference | Base layer for writing/code experiments |
| Qwen 3 4B (Ollama) | Small local model | Test basic scripts/captions; not production QA by itself |
| Kdenlive | Video editor | Real client footage and captions without generation credits |
| Inkscape + GIMP | Logos/art and retouching | Free production tools |
| bolt.diy **or** Dyad | Local app/site generation | A/B test against existing Bolt subscription |
| ComfyUI + appropriately licensed small video model | Optional generation | Benchmark on 8 GB VRAM before promising delivery |
| Open WebUI | Optional chat interface | Convenient local ChatGPT-style UI, not equivalent to top cloud models |
| OpenHands Agent Canvas or similar, **sandboxed** | Later code agent | Human review required for writes and shell commands |
| n8n | Later automation | Check licensing before operating paid client-hosted services |

## Preferred workflow
Brief -> model-assisted plan and draft -> React/HTML build -> local test -> Git commit -> private preview -> customer signoff -> deploy -> backup/hand-off. Use LLM for draft/iterations, not as an unreviewed final implementer.

## Bolt paid subscription decision
- Export/verify all existing Bolt project source and assets to owned Git repositories.
- Test the **same** small site brief in paid Bolt, local bolt.diy and Dyad for total time, visual quality, number of errors, hosting/deploy effort and costs.
- Retain one Bolt seat only when its hosted previews, paid model, managed database or velocity save more money than subscription cost.
- Bolt Teams is per-seat; verify bill and feature needs before paying twice.
- Free-tier hosting or static previews can suffice for prototype demos. Production backend, storage, traffic and paid features may cost extra.

## Useful official sources (verify versions/license before install)
- Ollama: https://ollama.com
- bolt.diy: https://github.com/stackblitz-labs/bolt.diy
- Dyad: https://github.com/dyad-sh/dyad
- Kdenlive: https://kdenlive.org/
- GIMP: https://www.gimp.org/
- Inkscape: https://inkscape.org/
- ComfyUI: https://docs.comfy.org/
- Open WebUI: https://github.com/open-webui/open-webui
- OpenHands docs: https://docs.openhands.dev/
- GitHub deployment options: GitHub Pages (static), Cloudflare Pages or Netlify (check terms/usage).

## Local quick check
```bash
nvidia-smi
free -h
lsblk -f
# After installing Ollama from its official source:
ollama run qwen3:4b
```
Do **not** expose Ollama/Open WebUI over the public internet without access controls. Local inference may use significant RAM, VRAM and disk; output quality requires human review.
